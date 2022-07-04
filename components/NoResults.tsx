import React from "react";
import { Video } from "../types";
import { NextPage } from "next";

interface IProps {
	text: string;
}

const NoResults = ({ text }: IProps) => {
	return <div>NoResults</div>;
};

export default NoResults;
