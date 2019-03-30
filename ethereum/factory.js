import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xF975950360069A924c1ddE2F33AD1A54DDCd914f"
);

export default instance;
