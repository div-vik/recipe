const querryStrings = {
  app_id: process.env.REACT_APP_APP_ID,
  app_key: process.env.REACT_APP_APP_KEY,
};

// https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=eedc465a&app_key=27a1a6a571a071b21a3751a6f238c8c9

export const fetchData = async (defaultQuerry) => {
  const { app_id, app_key } = querryStrings;

  try {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${defaultQuerry}&app_id=${app_id}&app_key=${app_key}`
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error, "Something went wrong.");
    return error;
  }
};

export const fetchTabData = async (defaultQuerry) => {
  const { app_id, app_key } = querryStrings;

  try {
    const data = await fetch(
      `https://api.edamam.com/api/recipes/v2/${defaultQuerry}?type=public&app_id=${app_id}&app_key=${app_key}`
    );
    const response = await data.json();
    return response;
  } catch (error) {
    console.log(error, "Something went wrong.");
    return error;
  }
};
