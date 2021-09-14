import { getUsefulContents } from "./lecture05";

getUsefulContents("http://www.example.com", data => {
    doSomethingUseful(data);
})