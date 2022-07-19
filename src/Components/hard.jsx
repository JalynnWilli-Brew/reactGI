import React from "react";
import BasicInfo from "./medium";

const BasicInfoList = () => {
    const peoplesInfo = [

        {name: "Jalynn",
        age: "23",
        dateOfBirth: "09/13/1998",
        number: "123-456-7890",
        email: "notemails@yahoo.com",
        address: "1234 Laurel Rd",
        city: "Richmond",
        state: "VA"},

        {name: "Joel",
        age: "24",
        dateOfBirth: "06/16/1998",
        number: "789-654-3210",
        email: "emails@yahoo.com",
        address: "1234 Laurel Rd",
        city: "Richmond",
        state: "VA"},

        {name: "Pajines",
        age: "25",
        dateOfBirth: "11/25/1997",
        number: "576-123-1234",
        email: "pjher@gmail.com",
        address: "4567 Lane St",
        city: "Atlanta",
        state: "GA"},

        {name: "Javon",
        age: "16",
        dateOfBirth: "07/20/2006",
        number: "324-545-9494",
        email: "jwilliams20@gmail.com",
        address: "4612 Laurel St",
        city: "Chester",
        state: "VA"},

        {name: "Jamirah",
        age: "19",
        dateOfBirth: "06/04/2003",
        number: "432-542-5848",
        email: "jwilliams04@gmail.com",
        address: "4612 Laurel St",
        city: "Chester",
        state: "VA"},

        {name: "Chloe",
        age: "4",
        dateOfBirth: "01/15/2018",
        number: "432-456-7803",
        email: "cbrewster@gmail.com",
        address: "1234 Laurel Rd",
        city: "Richmond",
        state: "VA"}
    ]; 

    return (
        <div className="peopleList">
            {peoplesInfo.map((info) => (
                <BasicInfo name={info.name} age={info.age} dateOfBirth={info.dateOfBirth} number={info.number} email={info.email} address={info.address} city={info.city} state={info.state} />
            ))}
        </div>
    );

};

export default BasicInfoList;