function handleKeyMobileNumber(e) {
  let key = e?.keyCode || e?.which
  key = String.fromCharCode(key)
  const regex = /^[0-9]*$/
  if (!regex.test(key)) {
    e.preventDefault()
    return false
  }
}
export default handleKeyMobileNumber
export const mobileRegex = RegExp(/^[6-9]{1}[0-9]{9}$/) //mobileRegex.test(phoneNumber)
//Mobile number should be of 10 digits and must start with 6, 7, 8 or 9.
export const timeregex = new RegExp(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/)
export const emailregex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)
export const regex = {
  name: /^[a-zA-Z]*$/,
  alphabetsWithSpace: /^[a-zA-Z ]*$/,
  alphabetsWithoutNumbers: /^([^0-9]*)$/,
  specialChars: /(?=.*?[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s])/,
  digit: /[0-9]/,
  LOWER_CASE: /[a-z]/,
  UPPER_CASE: /[A-Z]/,
  NO_WHITESPACE: /^\S*$/,
  address: /^([a-zA-Z0-9 /,.-]*)?$/,
  email:
    /^(?!.*[.]@)(?!.*[.]$)(?!.*^[.])(?!.*[#]{2})(?!.*[$]{2})(?!.*[%]{2})(?!.*[&]{2})(?!.*[']{2})(?!.*[*]{2})(?!.*[+]{2})(?!.*[-]{2})(?!.*[/]{2})(?!.*[=]{2})(?!.*[?]{2})(?!.*[/^]{2})(?!.*[_]{2})(?!.*[`]{2})(?!.*[{]{2})(?!.*[|]{2})(?!.*[}]{2})(?!.*[~]{2})(?!.*[.]{2})(?!.*[!]{2})[a-zA-Z0-9#$%&'*+-/=?^_`{|}~.!]{1,64}@[a-zA-Z0-9.-]{1,253}$/
}
//if (regex.specialChars.test(lastName))
export const dateRegex =
  /^[1-2]\d{3}[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/
