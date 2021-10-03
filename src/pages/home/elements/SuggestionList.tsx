import React from "react";
import { TextWrapper } from "components";
import styled from "styled-components";
import { white } from "utils/colors";

interface Props {
  suggestions: Array<string>;
  getCurrentSuggestions: (suggestion: string) => void;
}

const SuggestionList: React.FC<Props> = ({
  suggestions,
  getCurrentSuggestions,
}) => {
  return (
    <SuggestionsBlock>
      {suggestions.slice(0, 6).map((suggestion: string) => {
        return (
          <SuggestionText key={suggestion}>
            <TextWrapper
              onClick={() => getCurrentSuggestions(suggestion)}
              margin="0.5rem 0.5rem"
            >
              {suggestion}
            </TextWrapper>
          </SuggestionText>
        );
      })}
    </SuggestionsBlock>
  );
};

export default SuggestionList;

const SuggestionsBlock = styled.div`
  background: ${white};
  width: 20.5rem;
  margin: -0.75rem 0 0 1.25rem;
  z-index: 1;
  position: absolute;
  border-bottom-right-radius: 1.25rem;
  border-bottom-left-radius: 1.25rem;
`;
const SuggestionText = styled.div`
  cursor: pointer;
`;
