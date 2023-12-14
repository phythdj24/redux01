import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze(
    {
        SUCCESS: 'success',
        ERROR:'error',
        LOADING:'loading'
    }
    

)
 const productSlice = createSlice({
    name:'product',
    initialState:{
        data: [],
        status: STATUSES.SUCCESS,
    },

    reducers:{
        // setProducts (state, action){
        // state.data = action.payload;
        // },
        // setStatus (state, action){
        // state.status = action.payload;
        // }
    },
    extraReducers:(builder)=>{
       builder.addCase(fetchProducts.pending)
    }
 })

 export const {setProducts,setStatus} = productSlice.actions
 export default productSlice.reducer;

//Thunks

export const fetchProducts = createAsyncThunk('products/fetch',async ()=>{
    const res = await fetch('https://fakestoreapi.com/products');
     const data = await res.json();
     return data;
})






//  export function fetchProducts(){
   
//     return async function fetchProductsThunk(dispatch, getState){

//         dispatch(setStatus(STATUSES.LOADING))

//         try{
//         const res = await fetch('https://fakestoreapi.com/products');
       
//         const data = await res.json();
//         dispatch(setProducts(data))
//         dispatch(setStatus(STATUSES.SUCCESS))
//         } catch(err){
//             console.log(err)
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
//  }
