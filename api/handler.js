import fetch from "node-fetch";

export default async function handler(request, response) {
  const { masterBreed, subBreed } = request.query;
  const apiResponse = await fetch(
    `https://dog.ceo/api/breed/${masterBreed}/${subBreed}/images/random`
  );
  const json = await apiResponse.json();
  return response.status(200).json({ json });
}
