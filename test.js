
let numberOfNFTs = 0;.


function mintNFT(name, description, image) {
    let newNFT = { /
        name: name,
        description: description,
        image: image
    };
    numberOfNFTs++; 
    return newNFT;
}

.
function listNFTs(nftsArray) {
    nftsArray.forEach(nft => { 
        console.log("Name: " + nft.name); 
        console.log("Description: " + nft.description);
        console.log("Image: " + nft.image);
    });
}


function getTotalSupply() {
    return numberOfNFTs; 
}


let nft1 = mintNFT("NFT1", "Description for NFT1", "image1.jpg"); // Minting an NFT.
let nft2 = mintNFT("NFT2", "Description for NFT2", "image2.jpg"); // Minting another NFT.
let nft3 = mintNFT("NFT3", "Description for NFT3", "image3.jpg"); // Minting another NFT.

let nftsArray = [nft1, nft2, nft3]; 
listNFTs(nftsArray); 
console.log("Total Supply: " + getTotalSupply()); 