import { useEffect } from "react";
import Image from "../layout/common/Image";
import CompanyImage from "../../../src/assets/images/aboutcompanyimage.png"
export default function AboutMiddle() {


  return (
    <div
      className=" w-full bg-white container mt-10"

    >
      <div className="mx-auto px-2 mt-5.5   lg:px-10 ">
        <div className="grid grid-cols-1 gap-10 bmd:grid-cols-2 lg:gap-16">
          <Image className="w-full" src={CompanyImage}/>

          <div className="flex flex-col justify-center">
            <h2 className="mb-2 text-base font-semibold uppercase text-gray sm:mb-2.25">
              The Company
            </h2>

            <p className="mb-5 lg:mb-12.25 bmd:max-w-140 text-sm font-normal leading-7.5 text-primary ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              sapien dignissim a elementum. Sociis metus, hendrerit mauris id
              in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis
              sodales orci etiam phasellus lacus id leo. Amet turpis nunc,
              nulla massa est viverra interdum. Praesent auctor nulla morbi
              non posuere mattis. Arcu eu id maecenas cras. Eget fames
              tincidunt leo, sed vitae, pretium interdum. Non massa, imperdiet
              nunc sit sapien. Tempor lectus ornare quis mi vel.
            </p>

            <p className="bmd:max-w-140 text-sm font-normal leading-7.5 text-primary ">
              Nibh euismod donec elit posuere lobortis consequat faucibus
              aliquam metus. Ornare consequat, vulputate sit maecenas mauris
              urna sed fringilla. Urna fermentum iaculis pharetra, maecenas
              dui nullam nullam rhoncus. Facilisis quis vulputate sem gravida
              lacus, placerat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}