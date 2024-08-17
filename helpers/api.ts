

const token = "";
export const get = async (url: string) => {
  const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    return response;
  } else {
    throw new Error("Error while fetching data");
  }
};

export const post = async (url: string, data: any) => {
  const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return response;
  } else {
    throw new Error("Error while fetching data");
  }
};
