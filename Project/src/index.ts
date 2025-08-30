const getUserName = document.querySelector("#user") as HTMLInputElement;
const formSubmit = document.querySelector("#form") as HTMLFormElement;
const main_container = document.querySelector(".main_container") as HTMLDivElement;


// contract of an object
interface UserData {
    id: number;
    login: string;
    avatar_url: string;
    location: string;
    url: string;
}
// reusable function
async function myCustomFetcher<T>(url: string, options?: RequestInit): Promise<T> {
    const response =  await fetch(url, options)
        
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }
            




    const data = await response.json();
    console.log(data);
    return data;
    
}

const showResults = (singleUser:UserData) => {
    const {avatar_url, login, url} = singleUser;
    main_container.insertAdjacentHTML(
        "beforeend", 
        `<div class="card">
        <img src=${avatar_url} alt=${login} />
        <hr />
        <div class= "card-footer">
        <img src=${avatar_url} alt=${login} />
        <h2> ${login} </h2>
        <a href=${url}> Github </a>
        </div>
        </div>
        `
    );
}
// default function call
function fetchUserData(url:string) {
    myCustomFetcher<UserData[]>(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            showResults(singleUser);
            console.log("login:", singleUser.login);
            
        }
    })

}


fetchUserData("https://api.github.com/users");

// Search functionality
formSubmit.addEventListener("submit", async (e) => {
    e.preventDefault();
    const searchTerm = getUserName.value.toLowerCase();

    try {
        
        const url = `https://api.github.com/users`;
        
        
        const allUserData = await myCustomFetcher<UserData[]>(url, {})

        const matchingUsers = allUserData.filter((user) => {
            return user.login.toLowerCase().includes(searchTerm);
        });

        // clear previous results
        main_container.innerHTML = "";

        if (matchingUsers.length === 0) {
            main_container?.insertAdjacentHTML (
                "beforeend",
                `<h2 class="empty-msg"> No results found for "${searchTerm}"</h2>`
            );
         } else {
                for (const singleUser of matchingUsers) {
                    showResults(singleUser)
            }
            
        }
     } catch (error) {
        console.log(error);
     }
})