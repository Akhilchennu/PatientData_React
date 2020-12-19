import React, { useRef, useState } from 'react';
import { Button } from '@innovaccer/design-system';
import XLSX from 'xlsx';
import { service } from '../services/service';

const Upload = (props) => {
    const inputFile = useRef(null);
    const [fileError, setFileError] = useState();
    const [fileStream, setFileStream] = useState();

    const onFileUpload = () => {
        inputFile.current.click();
    }

    const onFileChange = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            const fileData = event.target.files[0];
            const filename = fileData.name.split('.')
            const fileType = filename[filename.length - 1].toLowerCase();
            if (fileType === 'xlsx' || fileType === 'csv') {
                setFileStream(event.target.files[0]);
                fileError && setFileError();
                const reader = new FileReader();
                reader.onload = function (event) {
                    const data = event.target.result;
                    const workbook = XLSX.read(data, {
                        type: 'binary'
                    });
                    workbook.SheetNames.forEach(async (sheetNames) => {
                        const jsonData = await XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetNames]);
                        const dataResponce = service.addPatients(jsonData);
                        dataResponce.then((response) => {
                            if (response.success) {
                                setFileError();
                            } else {
                                setFileError('Something went wrong.Try again');
                            }
                        })
                    })
                }
                reader.onerror = function (event) {
                    setFileError("File is corrupted");
                }
                reader.readAsBinaryString(fileData)
            } else {
                setFileError("Upload only xlsx or csv file")
            }
        }
        event.target.value = null;
    }

    return (
        <div>
            <input type="file" className="hide-file" ref={inputFile}
                onChange={(event) => onFileChange(event)} />
            <div className="submitButton margin12">
                <Button appearance="primary" size="regular" onClick={(event) => onFileUpload(event)}>
                    Upload Document
            </Button>
            </div>
            {fileError ? <div className="lable-font error">{fileError}</div> : null}
        </div>
    );
}

export default Upload;