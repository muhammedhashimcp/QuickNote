"use client";

import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BiCopy } from 'react-icons/bi';

const CopyComp = ({ text }) => {
    const [textCopied, setTextCopied] = useState(false)
    useEffect(() => {
        setTimeout(() => setTextCopied(false), 1000)
    }, [textCopied])
    return (
        <>
            <CopyToClipboard text={text}
                onCopy={() => setTextCopied(true)}>

                <div className="tooltip" data-tip={textCopied ? "Copied!" : "Copy"}>
                    <BiCopy size={26} className="text-slate-800 cursor-pointer" />
                </div>
            </CopyToClipboard>
        </>
    )
}

export default CopyComp