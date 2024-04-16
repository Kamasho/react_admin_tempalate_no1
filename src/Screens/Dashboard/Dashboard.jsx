import React from 'react'
import "./dashboard.css"
import Cards from '../../components/Cards/Card'
import { LiaLuggageCartSolid } from "react-icons/lia";
import { MdOutlineCrisisAlert } from "react-icons/md";
import { GiProfit } from "react-icons/gi";
import { IoMdPricetags } from "react-icons/io";


export default function Dashboard() {
  return (
    <>
      <div className="card">
        <Cards
          title="Order Received"
          icon={<LiaLuggageCartSolid size={40} />}
          total="398"
          totalSuccess="289"
          description="Completed Order"
        />
        <Cards
          title="Total Sales"
          icon={<MdOutlineCrisisAlert size={40}/>}
          total="495"
          totalSuccess="490"
          description="This Month"
        />
        <Cards
          title="Revenue"
          icon={<IoMdPricetags size={40} />}
          total="$40,640,000"
          totalSuccess="$40,640,000"
          description="This Month"
        />
        <Cards
          title="Total Profit"
          icon={<GiProfit size={40} />}
          total="$40,640"
          totalSuccess="$40,640"
          description="This Month"
        />
      </div>
    </>
  );
}
