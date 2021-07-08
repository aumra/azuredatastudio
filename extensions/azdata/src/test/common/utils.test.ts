/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as should from 'should';
import { NoAzureCLIError, searchForCmd as searchForExe } from '../../common/utils';

describe('utils', function () {
	describe('searchForExe', function (): void {
		it('finds exe successfully', async function (): Promise<void> {
			await searchForExe('node');
		});
		it('throws for non-existent exe', async function (): Promise<void> {
			await should(searchForExe('someFakeExe')).be.rejected();
		});
	});

	describe('NoAzdataError', function (): void {
		it('error contains message with and without links', function (): void {
			const error = new NoAzureCLIError();
			should(error.message).not.be.empty();
			should(error.messageWithLink).not.be.empty();
			should(error.message).not.equal(error.messageWithLink, 'Messages should not be equal');
		});
	});
});
