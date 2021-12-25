import axios from 'axios'
import { toast } from 'react-toastify'
import { decryptdata, encryptdata } from 'utility/context/SecurityTool'

// const decryptDiary = (response) => {
//   for (const data of response?.data) {
//     if (data?.spendId) {
//       data.spendId = decryptdata(data?.spendId)
//     }
//     if (data?.item) {
//       data.item = decryptdata(data?.item)
//     }
//     if (data?.label) {
//       data.label = decryptdata(data?.label)
//     }
//     if (data?.amount) {
//       data.amount = decryptdata(data?.amount)
//     }
//     if (data?.desc) {
//       data.desc = decryptdata(data?.desc)
//     }
//   }
//   return response
// }

export const getData = (params) => {
  return async (dispatch) => {
    const userData = sessionStorage.getItem('logInUserData')
      ? JSON.parse(sessionStorage.getItem('logInUserData'))
      : {}
    dispatch({ type: 'GET_ALL_DATA_LOADING', data: true })
    await axios
      .get(`/backendapi/nominee/list/${userData._id}`, {
        params,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
        }
      })
      .then((response) => {
        dispatch({ type: 'GET_ALL_DATA_LOADING', data: false })
        if (response?.data) {
          for (const data of response?.data) {
            data.nomineeId =
              data?.nomineeId && decryptdata(data.nomineeId, true)
            // data._id = data?._id && decryptdata(data._id,true)
            // data.userId = data?.userId && decryptdata(data.userId,true)
            data.name = data?.name && decryptdata(data.name, true)
            data.relation = data?.relation && decryptdata(data.relation, true)
            data.email = data?.email && decryptdata(data.email, true)
            data.primaryContact =
              data?.primaryContact && decryptdata(data.primaryContact, true)
            data.secondaryContact =
              data?.secondaryContact && decryptdata(data.secondaryContact, true)
            data.address = data?.address && decryptdata(data.address, true)
          }
          dispatch({
            type: 'GET_DATA',
            data: response.data,
            totalPages: response.length,
            params
          })
        }
      })
      .catch((err) => {
        console.log(err)
        dispatch({ type: 'GET_ALL_DATA_LOADING', data: false })
      })
  }
}

export const getSpendData = (params, filters) => {
  console.log('filters', filters)
  return async (dispatch) => {
    let userData = sessionStorage.getItem('logInUserData')
      ? JSON.parse(sessionStorage.getItem('logInUserData'))
      : {}
    dispatch({ type: 'GET_SPEND_DATA_LOADING', data: true })
    if (filters.year) {
      const today = new Date()
      const end = formatDate(today)
      const minusNo = Number(filters.year ? filters.year : 3)
      today.setMonth(today.getMonth() - minusNo)
      today.setDate(1)
      const start = formatDate(today)
      params.dateRangeStart = start
      params.dateRangeEnd = end
    }

    //let filt=`?dateRangeStart=${start}&dateRangeEnd=${end}`;
    if (filters.labels) {
      //filt=`${filt}&labels=${filters.labels}`
      params.labels = filters.labels
    }

    await axios
      .get(`/backendapi/spend/list/${userData._id}`, {
        //.get(`/backendapi/spend/list/${userData._id}`, {
        params,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
        }
      })
      .then((response) => {
        dispatch({ type: 'GET_SPEND_DATA_LOADING', data: false })
        dispatch({
          type: 'GET_DATA',
          //data: decryptDiary(response)?.data,
          data: response?.data,
          totalPages: response.length,
          params
        })
      })
      .catch((err) => {
        dispatch({ type: 'GET_SPEND_DATA_LOADING', data: false })
      })
  }
}

export const getInitialData = () => {
  let userData = sessionStorage.getItem('logInUserData')
    ? JSON.parse(sessionStorage.getItem('logInUserData'))
    : {}

  return async (dispatch) => {
    await axios
      .get(`/backendapi/nominee/list/${userData._id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
        }
      })
      .then((response) => {
        dispatch({ type: 'GET_ALL_DATA_LOADING', data: false })
        dispatch({ type: 'GET_ALL_DATA', data: response.data })
      })
  }
}

const formatDate = (d) => {
  let month = `${d.getMonth() + 1}`
  if (month.length === 1) {
    month = `0${month}`
  }
  let day = `${d.getDate()}`
  if (day.length === 1) {
    day = `0${day}`
  }
  return [d.getFullYear(), month, day].join('-')
}

export const getSpendInitialData = () => {
  let userData = sessionStorage.getItem('logInUserData')
    ? JSON.parse(sessionStorage.getItem('logInUserData'))
    : {}
  return async (dispatch) => {
    await axios
      .get(`/backendapi/spend/list/${userData._id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
        }
      })
      .then((response) => {
        dispatch({ type: 'GET_ALL_DATA', data: response?.data })
      })
  }
}
export const filterSpendData = (value) => {
  return (dispatch) => dispatch({ type: 'FILTER_SPEND_DATA', value })
}
export const filterData = (value) => {
  return (dispatch) => dispatch({ type: 'FILTER_DATA', value })
}
export const deleteData = (obj) => {
  return (dispatch) => {
    axios
      .post('/backendapi/nominee/delete', obj, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
        }
      })
      .then((response) => {
        dispatch({ type: 'DELETE_DATA', obj })
      })
  }
}
export const deleteSpendData = (obj) => {
  return (dispatch) => {
    axios
      .post('/backendapi/spend/delete', obj, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
        }
      })
      .then((response) => {
        dispatch({ type: 'DELETE_DATA', obj })
      })
  }
}

export const addData = (obj) => {
  const userData = sessionStorage.getItem('logInUserData')
    ? JSON.parse(sessionStorage.getItem('logInUserData'))
    : {}
  const nominee = {
    userId: userData._id,
    name: encryptdata(obj.name, true),
    relation: encryptdata(obj.relation, true),
    email: encryptdata(obj.email, true),
    primaryContact: encryptdata(obj.contact1, true),
    secondaryContact: encryptdata(obj.contact2, true),
    address: encryptdata(obj.address, true),
    secrets: obj.secrets
    //usage: 'Unused'
  }
  if (obj.relation === 'others' && obj.relation1)
    nominee.relation = encryptdata(obj.relation1, true)
  return async (dispatch) => {
    await axios
      .post('/backendapi/nominee/add', nominee, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
        }
      })
      .then((res) => {
        if (res.data === 'Success') { toast.success('Nominee Added Successfully') }
        else { toast.error(res.data) }

        dispatch(getData())
      })
  }
}
export const updateData = (obj) => {
  const userData = sessionStorage.getItem('logInUserData')
    ? JSON.parse(sessionStorage.getItem('logInUserData'))
    : {}
  const nominee = {
    _id: obj._id,
    usage: obj.usage ? obj.usage : 'Unused',
    userId: userData._id,
    name: encryptdata(obj.name, true),
    relation: encryptdata(obj.relation, true),
    email: encryptdata(obj.email, true),
    primaryContact: encryptdata(obj.contact1, true),
    secondaryContact: encryptdata(obj.contact2, true),
    address: encryptdata(obj.address, true)
  }
  if (obj.relation === 'others' && obj.relation1)
    nominee.relation = encryptdata(obj.relation1, true)
  return async (dispatch) => {
    await axios
      .post('/backendapi/nominee/update', nominee, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('authtoken')}`
        }
      })
      .then((res) => {
        toast.success('Nominee Updated Successfully')
      })
  }
}
