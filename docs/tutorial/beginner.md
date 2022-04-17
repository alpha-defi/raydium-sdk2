---
title:  Beginner
---

This section shows how to build a basic "hello world" application on top of the Raydium SDK.

## Project Goal

The goal of this section is to show how to consume the Raydium SDK from a client application
to render the Raydium mainnet token list.

![devnet](/img/tutorial/ray-table.png)

## Code

An example application was forked from [create-dapp-solana-nextjs](https://github.com/thuglabs/create-dapp-solana-nextjs) with minimal changes to demonstrate how to use the Raydium SDK. Lots
of the example application is unnecessary as it provides opinionated boilerplate. However, it 
provides a quick starting point to extend with simple examples using the Raydium SDK.

One example is the [RaydiumTokenTable.tsx](https://github.com/alpha-defi/raydium-sdk-examples/blob/main/src/components/RaydiumTokenTable/RaydiumTokenTable.tsx) component that creates a table using an [SplTokens](https://sdk.raydium.io/modules.html#SplTokens) array.

```tsx title='RaydiumTokenTable.tsx'
import { SplTokens } from "@raydium-io/raydium-sdk";

type ProgramProps = {
    tokens: SplTokens;
    sort?: Sort
};

export enum Sort {
    Symbol
}

/**
 * Returns a table view of SplToken objects with a default sort by symbol
 */
export function RaydiumTokenTable({ tokens, sort = Sort.Symbol }: ProgramProps) {
    const sortedMap = Object.keys(tokens).map(key => {
        return tokens[key];
    })?.sort((a, b) => {
        switch (sort) {
            case Sort.Symbol:
            default:
                return a.symbol.localeCompare(b.symbol);
        }
    })

    const headers = ['Symbol', 'Name', 'Mint'].map(header => {
        return <th className="px-6 py-3">{header}</th>
    })

    const rows = sortedMap ? sortedMap.map(token => {
        const { mint, name, symbol } = token;
        return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600">
            <td className="px-6 py-4">{symbol}</td>
            <td className="px-6 py-4">{name} </td>
            <td className="px-6 py-4">{mint} </td>

        </tr>;
    }) : <tr>No tokens specified</tr>;

    return <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-2xl">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-200">
            {headers}
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>;
}
```

Here is an [example](https://github.com/alpha-defi/raydium-sdk-examples/blob/2080a365b7b14422aaca8a97b6a7122fdf314225/src/views/RaydiumView/index.tsx) of how the table may render with a token list


```tsx
import { RaydiumTokenTable } from "../../components/RaydiumTokenTable/RaydiumTokenTable";
import { MAINNET_SPL_TOKENS } from "@raydium-io/raydium-sdk";
...
<RaydiumTokenTable tokens={MAINNET_SPL_TOKENS}></RaydiumTokenTable>
```