export const get = async (url: string) => {
  const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYWJsb25hdmVpcmFsb3BlekBnbWFpbC5jb20iLCJlbWFpbCI6InBhYmxvbmF2ZWlyYWxvcGV6QGdtYWlsLmNvbSIsImV4cCI6MTczMTA2MzUzN30.btRNl8vt_Gx0FAsij6hDHYS75Xum6p6vl0Qo0iHGqFg`,
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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYWJsb25hdmVpcmFsb3BlekBnbWFpbC5jb20iLCJlbWFpbCI6InBhYmxvbmF2ZWlyYWxvcGV6QGdtYWlsLmNvbSIsImV4cCI6MTczMTA2MzUzN30.btRNl8vt_Gx0FAsij6hDHYS75Xum6p6vl0Qo0iHGqFg`,
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return response;
  } else {
    throw new Error("Error while fetching data");
  }
};
