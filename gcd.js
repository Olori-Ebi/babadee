/**
 * Created by super user on 1/7/2019.
 */
function gcd(a,b) {
  if (a%b==0) {
    return b
  } else {
    return gcd(b,a%b)
  }
}
gcd(15,30)