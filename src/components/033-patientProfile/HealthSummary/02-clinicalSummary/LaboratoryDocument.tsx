import downloadPic from '@assets/HealthSummary/download.png';
import fileDOC from '@assets/HealthSummary/fileType_DOC.png';
import filePDF from '@assets/HealthSummary/fileType_PDF.png';
import filePIC from '@assets/HealthSummary/fileType_PIC.png';
import fileXLX from '@assets/HealthSummary/fileType_XLX.png';
import Card from '@components/Card/Card';
import Image from 'next/image';
import React from 'react';

// eslint-disable-next-line unused-imports/no-unused-vars
const LaboratoryDocument = ({ data }: { data: any }) => {
  const labDocData = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  const renderFileType = (fileType: string) => {
    let fileSrc;
    let altMsg;
    if (fileType === 'PDF') {
      fileSrc = filePDF;
      altMsg = '.pdf';
    } else if (fileType === 'DOC') {
      fileSrc = fileDOC;
      altMsg = '.doc';
    } else if (fileType === 'XLX') {
      fileSrc = fileXLX;
      altMsg = '.xlx';
    } else if (fileType === 'JPEG') {
      fileSrc = filePIC;
      altMsg = 'image';
    } else {
      fileSrc = fileDOC;
      altMsg = 'file';
    }
    return (
      <div className="mr-4 flex items-center ">
        <Image src={fileSrc} alt={altMsg} width={30} height={30} />
      </div>
    );
  };

  const detailName = (
    <div className="flex items-center rounded-lg px-3 text-sm sm:gap-3 sm:px-6 sm:text-base">
      <p className="min-w-[140px] text-greyOcare lg:min-w-[240px]">รายการ</p>
      <p className="min-w-[120px] text-greyOcare sm:min-w-[170px]">
        วันที่ตรวจ
      </p>
      <p className="hidden min-w-[210px] text-greyOcare min-[1100px]:block">
        ช่องทางการนำเข้าไฟล์
      </p>
      <p className="hidden min-w-[120px] text-greyOcare lg:block">รหัส VN</p>
      <p className="hidden min-w-[100px] text-greyOcare sm:block">คลินิก</p>
    </div>
  );

  const allDoc = labDocData.map((eachDoc: any, i: number) => {
    return (
      <div
        key={i}
        className="mt-1.5 flex items-center justify-evenly rounded bg-greySemiLightOcare p-3 sm:mt-4 sm:gap-3 sm:rounded-2xl sm:p-6"
      >
        <button className="flex min-w-[140px] cursor-pointer items-center border-none bg-transparent lg:min-w-[240px]">
          {renderFileType('PDF')}
          <p className="font-bold underline">?????????</p>
        </button>
        <p className="min-w-[120px] font-medium text-greyOcare sm:min-w-[170px]">
          ?d xm?m y?yy
        </p>
        <p className="hidden min-w-[210px] font-medium text-greyOcare min-[1100px]:block">
          ?H?S?
        </p>
        <p className="hidden min-w-[120px] font-medium text-greyOcare lg:block">
          VN???
        </p>
        <p className="hidden min-w-[100px] font-medium text-greyOcare sm:block">
          C?in?
        </p>
        <button className="ml-auto mr-0 flex cursor-pointer items-center border-none bg-transparent">
          <Image src={downloadPic} alt="download" width={30} height={30} />
        </button>
      </div>
    );
  });

  return (
    <Card className="rounded-md p-3 sm:rounded-lg sm:p-6" shadow={true}>
      {/* head */}
      <h1 className="mb-3 flex items-center border-x-0 border-t-0 border-solid border-greyLightOcare pb-3 text-lg font-medium sm:mb-6 sm:pb-6 sm:text-2xl">
        Laboratory Document
      </h1>
      {/* data */}
      {detailName}
      {allDoc}
    </Card>
  );
};

export default LaboratoryDocument;
