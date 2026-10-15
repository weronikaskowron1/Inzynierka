import React, {createContext,useContext,useState,useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext(null);

export function AuthProvider({children}) {
    const [user,setUser]=useState(null);
    const[isLoading,setIsLoading]=useState(true);

    useEffect(() => {
        const loadUser=async() => {
            try {
                const storedUser= await AsyncStorage.getItem("user");
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            } catch (e) {
                console.log("Błąd wczytywania użytkownika",e);
            } finally {
                setIsLoading(false);
            }
        };
        loadUser();
       },[]);
       const login=async(userData,rememberMe) => {
           setUser(userData);
           if (rememberMe) {
               await AsyncStorage.setItem("user",JSON.stringify(userData));
           }
       };

       const logout = async() => {
           setUser(null);
           await AsyncStorage.removeItem("user");
       }
       return (
           <AuthContext.Provider value={{user,isLoading,login,logout}}>
           {children}
           </AuthContext.Provider>
           );
    }
    export function useAuth() {
        return useContext(AuthContext);
        }