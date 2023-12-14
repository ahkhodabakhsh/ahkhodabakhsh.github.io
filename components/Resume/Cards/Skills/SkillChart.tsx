import React from 'react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import Typography from '@mui/material/Typography';
import { cards } from "@/components/GeneralStylings";

type SkillSet = {
    skillShortName: string;
    skillFullName: string;
    level: number;
    fullMark: number
}[];

function CustomTooltip({ active, payload }:any) {
    if (!active || !payload) return null;
    return (
      <div className="custom-tooltip">
        {/* <p>{payload[0].payload.skill}</p> */}
        <Typography gutterBottom
                    variant={cards.content.variant}
                    component="div"
                    color={cards.content.color}
                    bgcolor={'#564fd8'}
                    sx={{ px:1, py:0.5, borderRadius:1, }}
                    >
            {payload[0].payload.skillFullName}
        </Typography>
      </div>
    );
};

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
                <PolarAngleAxis dataKey="skillShortName" tick={{ fontSize:12 }}/>
                <PolarRadiusAxis tick={{ fontSize: 10 }}/>
                <Radar name={title} dataKey="level" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Tooltip content={<CustomTooltip />} />
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