import supabase from "../../config/supabase/supabase";
import LoginRequestDTO from "../../dtos/LoginRequestDTO";
import RegisterPostDTO from "../../dtos/RegisterPostDTO";

/* 
  <summary>
    Modified by: Hoa Pham
    Modified on: 28-Dec-2023
    Description: Login user
  </summary>
  <param name="data">data to login</param>
  <returns>Promise<any></returns>
*/
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

/* 
  <summary>
    Modified by: Hoa Pham
    Modified on: 28-Dec-2023
    Description: Logout user
  </summary>
  <returns>Promise<any></returns>
*/
export const logoutUser = async () => {
  await supabase.auth.signOut();
};


/* 
  <summary>
    Modified by: Hoa Pham
    Modified on: 28-Dec-2023
    Description: Register user
  </summary>
  <param name="mydata">data to register</param>
  <returns>Promise<any></returns>
*/
export const registerUser = async (mydata: RegisterPostDTO): Promise<any> => {
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

    console.log("data after sign up success:", data);

    if (data) {
      await supabase
        .from("tbl_user")
        .insert([
          {
            id: data.user!.id,
            first_name: data.user?.user_metadata.firstName,
            last_name: data.user?.user_metadata.lastName,
            email: mydata.email,
            phone_number: mydata.phone,
          },
        ])
        .select();
    }

    console.log("Register success");
  } catch (error) {
    console.log("Register error: ", error);
    throw error;
  }
};


/* 
  <summary>
    Modified by: Hoa Pham
    Modified on: 28-Dec-2023
    Description: Forgot password, this function will send email that contain link to reset password
  </summary>
  <param name="email">email to reset password</param>
  <returns>Promise<any></returns>
*/
export const forgotPassword = async (email: string): Promise<any | null> => {
  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.log("Forgot password error: ", error);
    throw error;
  }
};


/* 
  <summary>
    Modified by: Hoa Pham
    Modified on: 28-Dec-2023
    Description: Update password by email and new password
  </summary>
  <param name="email">email to update password</param>
  <param name="password">new password</param>
  <returns>Promise<any></returns>
*/
export const updatePasswordForUser = async (
  email: string,
  password: string
): Promise<any> => {
  const { data, error } = await supabase.auth.updateUser({
    email: email,
    password: password,
  });

  if (error) {
    throw error;
  }
  console.log("Update password success with data: ", data);
  return data;
};
