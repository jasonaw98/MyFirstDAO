import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x1aeB64fb593dc0a593Cc8dCe87C86e1b281F05dF");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Thanos Brother",
        description: "This NFT will give you access to AlienDAO!",
        image: readFileSync("scripts/assets/bot4.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();