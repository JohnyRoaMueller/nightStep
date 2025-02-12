import { useState } from 'react'
import Roles from '../../../../enums/Roles'
import { CategoryHeader, FormContainer, FormTextfield, Line, RegisterButton, TermsTypo, TermsWrapper, TextfieldLong, TextfieldMedium, TextfieldShort } from './registerGuestForm.Styles'
import { Box, Checkbox, FormControlLabel, Menu, MenuItem, NativeSelect, Select, TextField } from '@mui/material'
import { TypoBody1, TypoBody2, TypoH1, TypoH2 } from '../../../styled-components/styledTypographie'
import { CheckBox } from '@mui/icons-material'






function RegisterGuestForm() {

    type Date = {
        day: string,
        month: string,
        year: string,
    }
    const [date, setDate] = useState<Date>({
        day: "",
        month: "",
        year: "",
    })

    type InputEvent = React.ChangeEvent<HTMLInputElement>

    const handleDateChange = (event: InputEvent) => {

        const name = event.target.name
        const value = event.target.value
        setDate((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    type FormData = {
        firstname: string;
        lastname: string;
        email: string;
        emailConfirm: string;
        gender: string;
        birthday: string;
        username: string;
        password: string;
        role: Roles;
    };
    const [formData, setFormData] = useState<FormData>({
        firstname: "",
        lastname: "",
        email: "",
        emailConfirm: "",
        gender: "",
        birthday: "",
        username: "",
        password: "",
        role: Roles.GUEST
    })




    const handleChange = (event: InputEvent) => {

        const name = event.target.name
        const value = event.target.value
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }


    type ButtonEvent = React.MouseEvent<HTMLButtonElement>

    const handleSubmit = (event: ButtonEvent) => {
        event.preventDefault();

        fetch('http://10.0.2.24:8080/api/register',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    ...formData,
                    birthday: `${date.day}-${date.month}-${date.year}`
                })
            }
        )

        setFormData({
            firstname: "",
            lastname: "",
            email: "",
            emailConfirm: "",
            gender: "",
            birthday: "",
            username: "",
            password: "",
            role: Roles.GUEST
        })
    }
        

    const genderList = [
        "male",
        "female",
        "divers"
    ]

    const dayList: number[] = [];
    const monthList: number[] = [];
    const yearList: number[] = [];

    type FillList = {
        list: number[],
        from: number,
        to: number,
    };
    function fillList({ list, from, to }: FillList): void {
        if(from < to) {
            for(let i = from; i <= to; i++) list.push(i)
        } else if(from > to) {
            for(let i = from; i >= to; i--) list.push(i)} 
    }

    fillList({ list: dayList, from: 1, to: 31});
    fillList({ list: monthList, from: 1, to: 12});
    fillList({ list: yearList, from: 2024, to: 1950});






    /*
    const dayList = []
    const fillDayList = () => {
        for(let i = 0; i <= 31; i++) dayList.push(i)}

    const monthList = []
    const fillMonthList = () => {
        for(let i = 0; i <= 12; i++) monthList.push(i)
    }

    const yearList = []
    const fillYearList = () => {
        for(let i = 1933; i <= 2024; i++) fillYearList.push(i)
    }
        */



    return (
        <>
            <FormContainer>
                <form typeof='submit' onSubmit={handleSubmit}>
                    <Line>
                        <CategoryHeader><TypoH2>BASE</TypoH2></CategoryHeader>
                    </Line>
                    <Line>
                        <TextfieldLong name='firstname'helperText='firstname' variant='standard' value={formData.firstname} onChange={handleChange} key='textfield-firstname'/>
                    </Line>
                    <Line>
                        <TextfieldLong name='lastname' helperText='lastname' variant='standard' value={formData.lastname} onChange={handleChange} key='textfield-lastname'/>
                    </Line>
                    <Line>
                        <TextfieldLong name='email' helperText='email' variant='standard' value={formData.email} onChange={handleChange} key='textfield-email'/>
                    </Line>
                    <Line>
                        <TextfieldLong name='emailConfirm' helperText='confirm email' variant='standard' value={formData.emailConfirm} onChange={handleChange} key='textfield-confirmEmail' />
                    </Line>
                    <Line>
                        <CategoryHeader><TypoH2>EVENT RELATED</TypoH2></CategoryHeader>
                    </Line>
                    <Line>
                        <TextfieldMedium name='gender' helperText='gender' variant='standard' select slotProps={{select: {native: true}}} value={formData.gender} onChange={handleChange} key='textfield-gender'> {/*select (non-native) prop sorgt für overlay und stören der Layouts*/} {/* Lösung von https://stackblitz.com/run?file=Demo.tsx Zeile 47 - 64)*/}
                                <option value='' disabled>{"▒"}</option>
                                {genderList.map((gender) => <option value={gender} key={gender}>{gender}</option>)}
                        </TextfieldMedium>

                        <TextfieldShort name='day' helperText='day' select slotProps={{select: {native: true}}} value={date.day} onChange={handleDateChange} key='textfield-day' id='textfield-day'>
                                <option value='' disabled>{"▒"}</option>
                                {dayList.map((day) => <option value={day} key={day}>{day}</option>)}
                        </TextfieldShort>

                        <TextfieldShort name='month' helperText='month' select slotProps={{select: {native: true}}} value={date.month} onChange={handleDateChange} key='textfield-month' id='textfield-month'>
                                <option value='' disabled>{"▒"}</option>
                                {monthList.map((month) => <option value={month} key={month}>{month}</option>)}
                        </TextfieldShort>

                        <TextfieldShort name='year' helperText='year' select slotProps={{select: {native: true}}} value={date.year} onChange={handleDateChange} key='textfield-year' id='textfield-year'>
                                <option value='' disabled>{"▒"}</option>
                                {yearList.map((year) => <option value={year} key={year}>{year}</option>)}
                        </TextfieldShort>

                    </Line>
                    <Line>
                        <TextfieldMedium name='username' helperText='username' value={formData.username} onChange={handleChange} key='textfield-username'/>
                        <TermsWrapper>
                            <Checkbox onChange={handleChange}/>
                            <TypoBody1>I have read and agree to the Terms of Use</TypoBody1>
                        </TermsWrapper>
                    </Line>
                    <Line>
                        <TextfieldMedium name= 'password' helperText ='password' value={formData.password} onChange={handleChange} key='textfield-password'></TextfieldMedium>
                        <RegisterButton type='submit' key='Button-register'>
                            Create Account
                        </RegisterButton>
                    </Line>
                </form>
            </FormContainer>

        </>
    )
}


export default RegisterGuestForm
