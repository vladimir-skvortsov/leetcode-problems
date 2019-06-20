const IPv4RegEx = /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/
const IPv6RegEx = /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i

const validIPAddress = ip => {
  if (IPv4RegEx.test(ip)) return 'IPv4'
  else if (IPv6RegEx.test(ip)) return 'IPv6'
  else return 'Neither'
}