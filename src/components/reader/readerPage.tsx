import React, { useState } from 'react';
import './index.css';
import { Page } from './types';
import ReaderText from './readerText';

interface Props {
	page: Page;
}

const ReaderPage: React.FC<Props> = (props: Props) => {
	return <div className="hamster-note-reader-page">
		{props.page.texts.map(text => {
			return <ReaderText text={text} />;
		})}
	</div>;
};

export default ReaderPage;
