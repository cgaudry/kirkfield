import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export const MainLayout = ({content}) => (
	<div className="main-layout">
	<header>
		<h2>Kirkfield Web Portal</h2>
		<nav>
			<a href="/inventoryInput">InventoryInput</a>
			<a href="/inventorySearch">InventorySearch</a>
			<a href="/reporting">Reporting</a>
			<AccountsUI />
		</nav>
	</header>
	<main>
		{content}
	</main>
	</div>
)