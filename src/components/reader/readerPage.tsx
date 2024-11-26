import React, { useState } from 'react';
import './index.css';
import ReaderText from './readerText';
import { RelationPage } from '../../store/data/types';

interface Props {
	page: RelationPage;
}

const ReaderPage: React.FC<Props> = (props: Props) => {
	return <div className="hamster-note-reader-page">
		{props.page.texts.map(text => {
			return <ReaderText text={text} />;
		})}
	</div>;
};

export default ReaderPage;
