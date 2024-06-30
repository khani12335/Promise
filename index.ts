function userlogin(): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log("----------------WELL COME TO OUR WEBSITE-------------------");
    setTimeout(() => {
      console.log("\nHow can i hlep\n");
      resolve();
    }, 2000);
  });
}
function purches(): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log(
      "................PURCHES WITH 50% OFF !........................"
    );
    setTimeout(() => {
      let imgs = ["Clothes", "Shose", "Gift", "Mobiles"];
      for (let img of imgs) {
        console.log(img);
      }
      console.log("We deliver your order in your home!\n");
      resolve();
    }, 3000);
  });
}
function order(): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log(".....Order recieve....\n");
    setTimeout(() => {
      let Reaction = [
        "customer.1",
        "customer..2",
        "customer..3",
        "customer..4",
      ];
      for (let i = 0; i < Reaction.length; i++) {
        console.log(Reaction[i], "order deliver!..");
      }
      console.log("\nThank to visit the website!\n");
      resolve();
    }, 3000);
  });
}
function login(): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log("login!");
    setTimeout(() => {
      console.log("log out!");
    }, 3000);
  });
}
userlogin().then(purches).then(order).then(login).catch((err)=>console.log(err))
