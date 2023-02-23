import Button from "./Button";
import settingImage from "../images/setting.png";
import React from "react";
import {TextField} from "@mui/material";

function SetUserInfo({labelForTextArea}) {
    return (<div>
            <TextField id="outlined-basic" label={labelForTextArea} variant="outlined" />
            <Button img_src={settingImage} />
            </div>)
}

export default SetUserInfo;