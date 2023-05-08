// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//require("dotenv").config();
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};
const FACEBOOK_GRAPH_URL = "https://graph.facebook.com/v16.0";
export const APP_ID = "1035029924144825";
const APP_SECRET = "83e3133924868a7e55bf32534693fad8";
export default async function handler(req: any, res: any) {
  const appAccessToken = await getAppAccessToken();
  const scopes = await debugToken(appAccessToken, req.query.token);
  console.log(scopes);
  res.json({ scopes });
}

const getAppAccessToken = async () => {
  const response = await fetch(
    `https://graph.facebook.com/oauth/access_token?client_id=${APP_ID}&client_secret=${APP_SECRET}&grant_type=client_credentials`
  );

  const data: { access_token: string } = await response.json();
  if (!response.ok) {
    throw new Error("App access token failed");
  }
  console.log("data.access_token: ", data.access_token);
  return data.access_token;
};

const debugToken = async (appAccessToken: string, token: string) => {
  const response = await fetch(
    `${FACEBOOK_GRAPH_URL}/debug_token?input_token=${token}&access_token=${appAccessToken}`
  );
  console.log("debugtoken: ", response);
  const data: { data: { scopes: string[] } } = await response.json();
  return data.data.scopes;
};

const getPagesBasedOnToken = async (userToken: string) => {
  const response = await fetch(
    `${FACEBOOK_GRAPH_URL}/me/accounts?access_token=${userToken}`
  );
};
