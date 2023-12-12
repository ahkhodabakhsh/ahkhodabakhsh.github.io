import React from 'react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import Typography from '@mui/material/Typography';
import { cards } from "@/components/GeneralStylings";

type SkillSet = {
    skill: string;
    level: number;
    fullMark: number
}[];

export default function SkillChart({data, title}:{data:SkillSet,title:string}){
    return(
        <div className="flex flex-col justify-end items-center w-full h-full"
             style={{width: '100%',
                     height:'100%',
                     minWidth:"250px",
                     minHeight:"250px"
                    }}
         >
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" tick={{ fontSize: 12 }}/>
                <PolarRadiusAxis tick={{ fontSize: 12 }}/>
                <Radar name={title} dataKey="level" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>

        <Typography gutterBottom
                    variant={cards.content.variant}
                    component="div"
                    color={cards.content.color}
                    >
            {title}
        </Typography>
    </div>
    )
}