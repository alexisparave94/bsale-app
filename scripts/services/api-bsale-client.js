const BASE_URI = "http://localhost:3000"

export default async function apiBSaleClient(endpoint) {
  const response = await fetch(`${BASE_URI}/${endpoint}`);

  let data;
  if (!response.ok) {
    throw new Error(data.errors);
  }

  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }

  return data;
} 