import supabase from "../../config/supabase/supabase";
import LoginRequestDTO from "../../dtos/LoginRequestDTO";
import RegisterGetDTO from "../../dtos/RegisterGetDTO";
import RegisterPostDTO from "../../dtos/RegisterPostDTO";
import GenerateRandomPassword from "../../utils/GenerateRandomPassword";

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

    // const registerData = { ...data };

    // if (registerData) {
    //   try {
    //     const { data, error } = await supabase.from("tbl_user").insert([
    //       {
    //         id: registerData.user?.id,
    //         first_name: mydata.firstName,
    //         last_name: mydata.lastName,
    //         phone_number: mydata.phone,
    //         email: mydata.email,
    //       },
    //     ]);

    //     if (data) return data;
    //     if (error) throw error;
    //   } catch (error) {
    //     console.log("Add user to database error: ", error);
    //     throw error;
    //   }
    // }
    if (error) {
      throw error;
    }

    console.log("Register success");
  } catch (error) {
    console.log("Register error: ", error);
    throw error;
  }
};

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
