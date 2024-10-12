import React from 'react'
import IntegrationCard from '../Components/Integration/IntegrationCard'
import GoogleDoc from "../assets/Img/GoogleDoc.svg"
import GoogleDriverLogo from "../assets/Img/GoogleDriverLogo.svg"
import GoogleLens from "../assets/Img/GoogleLens.svg"
import GoogleLens2 from "../assets/Img/GoogleLens2.svg"
import PowerPointLogo from "../assets/Img/PowerPointLogo.svg"
import WordLogo from "../assets/Img/WordLogo.svg"
const Integration = () => {
    return (
        <div className='px-[10px] w-full h-[100%] pt-[20px]'>
            <div className="bg-white rounded-[10px] min-h-[760px] p-5 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <IntegrationCard Img={GoogleDriverLogo} Name="Google Drive" />
                <IntegrationCard Img={GoogleLens} Name="Google Lens" />
                <IntegrationCard Img={GoogleLens2} Name="Google Lens" />
                <IntegrationCard Img={GoogleDoc} Name="Google Doc" />
                <IntegrationCard Img={WordLogo} Name="Word" />
                <IntegrationCard Img={PowerPointLogo} Name="Power point" />
            </div>
        </div>
    )
}

export default Integration