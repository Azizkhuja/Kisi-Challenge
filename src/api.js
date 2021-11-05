import Kisi from "kisi-client";

const kisiClient = new Kisi();

async function authenticate() {
  await kisiClient.signIn("azeezkhujaev@gmail.com", "Aa3003934@");
  return kisiClient;
}
const kisiApi = authenticate();

export default kisiApi;
