let contract;
let signer;
let contractWithSigner;

main();

async function main() {
    // basic setup code required for all the web pages we make that interact with MetaMask and the Ethereum blockchain
    console.log("???")
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, provider);
    contractWithSigner = contract.connect(signer);

    /////// ADD YOUR CODE BELOW THIS LINE ///////

    const myAddress = await signer.getAddress();
    console.log(myAddress);

    ///mint an NFT when the user higt the mint button//

    mintButton.addEventListener("click", function(){

      contractWithSigner.safeMint(myAddress)




    })
}