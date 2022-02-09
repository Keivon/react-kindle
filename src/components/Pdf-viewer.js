import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import {Link} from "react-router-dom";




export default class App extends Component {
	state = { numPages: null, pageNumber: 1 };

	onDocumentLoadSuccess = ({ numPages }) => {
		this.setState({ numPages });
	};

	goToPrevPage = () =>
		this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
	goToNextPage = () =>
		this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

	render() {
		const { pageNumber, numPages } = this.state;

		return (
			<div>
                <Link to ='/'>
                back
                </Link>
				<nav>
					<button onClick={this.goToPrevPage}>Prev</button>
					<button onClick={this.goToNextPage}>Next</button>
				</nav>

                <div style={{ width: '100vw', marginLeft: '27vw' }}>
					<Document
						file='/books/The-Art-of-War.pdf'
						onLoadSuccess={this.onDocumentLoadSuccess}
					>
						<Page pageNumber={pageNumber} width={600} />
					</Document>
				</div>

				<p>
					Page {pageNumber} of {numPages}
				</p>
			</div>
		);
	}
}
