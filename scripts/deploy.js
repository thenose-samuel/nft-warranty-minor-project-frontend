async function main() {
  const MyNFT = await ethers.getContractFactory("Admin");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy(
    "0x0472e072C703f3c5575A57f578F49a02D01b29AD"
  );
  await myNFT.deployed();
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
