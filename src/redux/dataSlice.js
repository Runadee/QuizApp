import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategory , getQuestions} from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getCategoryData = createAsyncThunk('data/getCategoryData', async()=>{
    const response = await getCategory()

    return response

})

export const getQuestionsData = createAsyncThunk('data/getQuestionsData', async(categoryID)=>{
    const response = await getQuestions(categoryID)

    return response

})

const initialState = {
    questions:[],
    categories:[],
    currentQuestionIndex:0,
    score:0,
    isLoading: false,
    error:null,
}

const dataSlice = createSlice ({

    name:'category',

    initialState,

    reducers:{
        setClearData:(state)=>{
            state.score = 0 
            state.currentQuestionIndex = 0
            state.isLoading = false
        },

        setCorrectAnswer:(state)=>{
            state.score += 1
            state.currentQuestionIndex += 1

        },
        setIncorrectAnswer:(state)=>{
            state.score -=1
            state.currentQuestionIndex += 1
        },
        saveScore:(state)=>{
            const newScoreData = {
                score : state.score,
                date : new Date().toISOString()
            }

            AsyncStorage.getItem("scoreData")
            .then((existingScoresJson)=>{
                const value = (existingScoresJson)
                             ?  JSON.parse(existingScoresJson) 
                             : []

                const updatedScores = [...value, newScoreData]

                AsyncStorage.setItem("scoreData", JSON.stringify(updatedScores))
                        .then(()=> console.log("Score saved to Async storage"))
                        .catch("Error from setItem seving score to Async storage")
            })
            .catch((error)=> console.log("Error from getItem saving score to Async storage"))
        }
    },

    extraReducers: (builder) => {
        builder
             .addCase(getCategoryData.pending, (state)=> {
                  state.isLoading = true
                  state.error = null
             })
             .addCase(getCategoryData.fulfilled, (state,action) => {
                state.categories = action.payload
                state.isLoading = false
                state.error = null
             })
             .addCase(getCategoryData.rejected, (state,action)=>{
                state.error = action.error.message
                state.isLoading = false
             })

             .addCase(getQuestionsData.pending, (state)=> {
                  state.isLoading = true
                  state.error = null
             })

             .addCase(getQuestionsData.fulfilled, (state,action)=> {
                state.questions = action.payload
                state.isLoading = false
                state.error = null
             })
             
             .addCase(getQuestionsData.rejected, (state,action)=> {
                state.error = action.error.message
                state.isLoading = false

             })


    }

})

export const { setClearData, setCorrectAnswer, setIncorrectAnswer , saveScore} = dataSlice.actions

export default dataSlice.reducer