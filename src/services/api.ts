import { MD5 } from "react-native-crypto-js";
import axios from 'axios';
import {PUBLIC_KEY, PRIVATE_KEY} from "@env"

const timestamp = +new Date();

const generateHash = (timestamp: number, privateKey: String, publicKey: String) =>
  MD5(`${timestamp}${privateKey}${publicKey}`);

const hash = generateHash(timestamp, PRIVATE_KEY, PUBLIC_KEY);

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    apikey: PUBLIC_KEY,
    ts: `${timestamp}`,
    hash: `${hash}`
  },
});