"use client";

import { getSerieById } from "@/shared/api";
import { url } from "inspector";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Details() {

    const router = useRouter();
    const [id, setId] = useState<number>(0);
    const [details, setDetails] = useState<any>(null);

    useEffect(() => {
        let temp = window.location.pathname.split('/')
        setId(+temp[temp.length - 1])
        getSerieById({ id: +temp[temp.length - 1] }).then((data) =>
            setDetails(data.results)
        );
    }, [])


    return (
        <h1>{id}</h1>
    )

}