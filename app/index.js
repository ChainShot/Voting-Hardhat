import Voting from './artifacts/contracts/Voting.sol/Voting';
import {address} from './__config';
import {ethers} from 'ethers';
import "./index.scss";
import "./populate.js";

const provider = new ethers.providers.Web3Provider(ethereum);

async function newProposal() {
  const question = document.getElementById("question").value;
  await ethereum.request({ method: 'eth_requestAccounts' });
  const signer = provider.getSigner();
  const contract = new ethers.Contract(address, Voting.abi, signer);
  await contract.newProposal(question);
}

document.getElementById("deploy").addEventListener("click", newProposal);
