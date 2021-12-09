import React from 'react'
import styled from 'styled-components/macro'
import { QUERIES } from '../../constants'
import { MARKET_DATA, SPORTS_STORIES } from '../../data'

import MarketCard from '../MarketCard'
import SectionTitle from '../SectionTitle'
import MiniStory from '../MiniStory'

const SpecialtyStoryGrid = () => {
	return (
		<Wrapper>
			<MarketsSection>
				<SectionTitle
					cornerLink={{
						href: '/markets',
						content: 'Visit Markets data »',
					}}
				>
					Markets
				</SectionTitle>
				<MarketCards>
					{MARKET_DATA.map(data => (
						<MarketCard key={data.tickerSymbol} {...data} />
					))}
				</MarketCards>
			</MarketsSection>
			<SportsSection>
				<SectionTitle
					cornerLink={{
						href: '/sports',
						content: 'Visit Sports page »',
					}}
				>
					Sports
				</SectionTitle>
				<SportsStories>
					{SPORTS_STORIES.map(data => (
						<MiniStory key={data.id} {...data} />
					))}
				</SportsStories>
			</SportsSection>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	gap: 48px;

	@media ${QUERIES.tabletAndUp} {
		gap: 64px;
	}
	@media ${QUERIES.laptopAndUp} {
		gap: 0;
		grid-template-columns: 1fr 1fr;
	}
`

const MarketsSection = styled.section`
	@media ${QUERIES.laptopAndUp} {
		margin-right: 16px;
		padding-right: 16px;
		border-right: 1px solid var(--color-gray-300);
	}
`

const MarketCards = styled.div`
	display: grid;
	gap: 16px;
	grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
`
const SportsSection = styled.section``

const SportsStories = styled.div`
	@media ${QUERIES.laptopAndUp} {
	}
`

export default SpecialtyStoryGrid
