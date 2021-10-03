import { TextWrapper } from "components/wrappers/TextWrapper";
import React from "react";
import styled from "styled-components";
import { white } from "utils/colors";

interface Props {
  suggestions: any;
  getCurrentSuggestions: () => void;
}

const SuggestionList: React.FC<Props> = ({
  suggestions,
  getCurrentSuggestions,
}) => {
  return (
    <SuggestionsBlock>
      {suggestions.slice(0, 6).map((suggestion) => {
        return (
          <SuggestionText>
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
  width: 328px;
  margin: -12px 0 0 20px;
  z-index: 1;
  position: absolute;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;
const SuggestionText = styled.div`
  cursor: pointer;
`;
