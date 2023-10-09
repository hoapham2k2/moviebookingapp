import supabase from "../../config/supabase/supabase";
import LoginRequestDTO from "../../dtos/LoginRequestDTO";

export const loginUser = async (data: LoginRequestDTO) => {
  const { email, password } = data;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.log("Login error: ", error);
    throw error;
  }
};

export const logoutUser = async () => {
  await supabase.auth.signOut();
};

export const registerUser = async (mydata: any) => {
  console.log("Register data: ", mydata);
  const { email, password } = mydata;
  try {
    const { data, error } = await supabase.auth.signUp({
      email: mydata.email,
      password: mydata.password,
      options: {
        data: {
          firstName: mydata.firstName,
          lastName: mydata.lastName,
          phone: mydata.phone,
        },
      },
    });

    console.log("Register success");
  } catch (error) {
    console.log("Register error: ", error);
    throw error;
  }
};
