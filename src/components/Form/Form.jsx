import React from 'react';
import './Form.css';


const Form = (props) => {
    return (
        <form className="form-area" onSubmit={props.onSubmit} >
        <select
            placeholder="Please select your gender" 
            value={props.data.gender} 
            name="gender" 
            onChange={props.onChange}
        >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>

        <select
            placeholder="Please select your goal" 
            value={props.data.goal} 
            name="goal" 
            onChange={props.onChange}
        >
            <option value="">Select goal</option>
            <option value="-750">Steady weight loss (-750kcal ~ -1.5lb per week)</option>
            <option value="-1000">Aggressive weight loss (-1000kcal ~ -2lb per week)</option>
            <option value="0">Maintenance (Maintain current weight)</option>
            <option value="500">Steady weight gain (500kcal ~ + 1lb per week)</option>
            <option value="750">Aggressive weight gain (500kcal ~ + 1.5lb per week)</option>
        </select>

        <input 
            type="number"  
            name="age"
            placeholder="Please enter your age in years"
            value={props.data.age}
            onChange={props.onChange}
        />

        <input 
            type="number"  
            name="weight"
            placeholder={props.data.imperialUnits? "Please enter weight in Pounds (lb)":"Please enter weight in Kilograms (kg)"}
            value={props.data.weight}
            onChange={props.onChange}
        />

        <input 
            type="number"  
            name="height"
            placeholder={props.data.imperialUnits? "Please enter your height in inches (in)": "Please enter your height in Centimeters (cm)"}
            value={props.data.height}
            onChange={props.onChange}
        />

        <select
            placeholder="Please select your activity level" 
            value={props.data.activityLevel} 
            name="activityLevel" 
            onChange={props.onChange}
        >
            <option value="">Select activity level</option>
            <option value="1.2">
                Sedentary (little or no exercise, desk job)  
            </option>
            <option value="1.375">
                Lightly active  (light exercise/ sports 1-3 days/   week)    
            </option>
            <option value="1.55">
                Moderately active (moderate exercise/ sports 6-7 days/week)    
            </option>
            <option value="1.725">
                Very active  (hard exercise every day, or exercising 2 xs/day)  
            </option>
            <option value="1.9">
                Extra active  (hard exercise 2 or more times per day, or training for marathon, or triathlon)
            </option>
        </select>
        <input type="submit" />
    </form>
    );
}

export default Form;
