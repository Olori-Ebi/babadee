function armStrong(num) {
  let total=0;
  let num_int=Number(num);
  let num_str=String(num);
    for (let i=0; i<num_str.length; i++) {
    total += Number(num_str[i])**num_str.length;
    console.log(total)
    }
  if (total==num) {
    console.log("ARMSTRONG!!!")
    } else {
      console.log("NOT ARMSTRONG!!!")
    }
}
armStrong(371)/**
 * Created by super user on 1/7/2019.
 */
