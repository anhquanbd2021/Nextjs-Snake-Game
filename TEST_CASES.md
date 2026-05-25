# Snake Game Test Matrix

## 1. Layout Component Testing
### Component: `src/app/layout.js`
### Business Logic Requirements:
- Consistent page structure across all routes
- Proper font loading and styling
- Footer visibility and correctness
### Validation Checkpoints:
| Test Case | Expected Behavior | Edge Cases |
|-----------|-------------------|------------|
| Page Structure | All pages should have a consistent layout with proper spacing and alignment. | - Test on different screen sizes (mobile, tablet, desktop) |
| Font Loading | Inter font should load correctly across all browsers and devices. | - Test in incognito mode to ensure font loads without cache |
| Footer Presence | Footer should appear at bottom of every page with correct styling. | - Verify footer remains visible even when content overflows |

## 2. Footer Component Testing
### Component: `src/components/Footer.jsx`
### Business Logic Requirements:
- Proper attribution display
- Correct GitHub link functionality
### Validation Checkpoints:
| Test Case | Expected Behavior | Edge Cases |
|-----------|-------------------|------------|
| Footer Text | "Created by Diego Ivan Perea Montealegre" should be visible and correctly styled. | - Verify text remains legible on different background colors |
| GitHub Link | Clicking the link should open GitHub profile in new tab. | - Test in multiple browsers (Chrome, Firefox, Safari) |

## 3. Home Page Testing
### Component: `src/app/page.js`
### Business Logic Requirements:
- Score tracking and display
- Game over state handling
- Reset functionality
- Control responsiveness
### Validation Checkpoints:
| Test Case | Expected Behavior | Edge Cases |
|-----------|-------------------|------------|
| Score Display | Current score should update immediately when snake eats food. | - Verify score increments correctly (max possible score?) |
| Game Over State | "Play Again" button appears when game over and clicking it resets the game. | - Test immediate reset vs delayed reset |
| Control Inputs | Arrow key presses should change snake direction. | - Test multiple simultaneous key presses |
| Reset Functionality | All game state variables (score, snake length, food position) should reset to initial values on button click. | - Verify reset happens even if browser is in low memory state |

## 4. Snake Game Component Testing
### Component: `src/components/SnakeGame.jsx`
### Business Logic Requirements:
- Snake movement and direction changes
- Food generation and collision detection
- Wall and self-collision handling
- Score tracking integration
### Validation Checkpoints:
| Test Case | Expected Behavior | Edge Cases |
|-----------|-------------------|------------|
| Basic Movement | Snake should move in chosen direction with correct speed. | - Test all four directions independently |
| Direction Change | Snake cannot reverse direction instantly (e.g., moving left when currently moving right). | - Verify allowed direction changes (left/right/up/down) |
| Food Collision | When snake head reaches food position, score increases by 1 and new food appears. | - Test multiple consecutive food collisions |
| Wall Collision | Game should end if snake hits wall boundaries. | - Test edge cases where snake is exactly at boundary |
| Self Collision | Game should end if snake collides with itself. | - Verify collision detection works for all snake segments |

## 5. Global CSS Testing
### File: `src/app/globals.css`
### Business Logic Requirements:
- Consistent styling across entire application
- Proper responsive design implementation
- Correct color scheme adherence
### Validation Checkpoints:
| Test Case | Expected Behavior | Edge Cases |
|-----------|-------------------|------------|
| Base Styling | All pages should have consistent background colors, text colors, and font sizes. | - Test in different browsers (Chrome, Firefox, Safari) |
| Responsive Design | Layout should adjust properly for different screen sizes (mobile-first approach). | - Test on actual devices vs emulators |
| Color Scheme | All UI elements should adhere to specified color palette (#1b1b1b background, #50d950 buttons, etc.). | - Verify colors remain consistent in low-light conditions |

## 6. Footer CSS Testing
### File: `src/components/footer.css`
### Business Logic Requirements:
- Proper footer styling and positioning
- Correct link behavior
- Consistent typography
### Validation Checkpoints:
| Test Case | Expected Behavior | Edge Cases |
|-----------|-------------------|------------|
| Footer Styling | Footer should be centered, have correct padding, and use specified background color. | - Test on different screen sizes |
| Link Behavior | GitHub link should have proper hover effect without affecting footer layout. | - Verify link works in incognito mode |

## 7. Accessibility Testing
### Business Logic Requirements:
- Ensure the game is accessible to users with disabilities.
### Validation Checkpoints:
| Test Case | Expected Behavior | Edge Cases |
|-----------|-------------------|------------|
| Keyboard Navigation | All interactive elements should be navigable via keyboard. | - Test using only keyboard inputs (no mouse) |
| Screen Reader Compatibility | Game should be readable and understandable by screen readers. | - Use tools like NVDA or VoiceOver to test |

## 8. Performance Testing
### Business Logic Requirements:
- Check the performance of the game under different conditions.
### Validation Checkpoints:
| Test Case | Expected Behavior | Edge Cases |
|-----------|-------------------|------------|
| High Score Scenario | Game should perform well even with high scores (e.g., score > 100). | - Monitor CPU and memory usage during gameplay |

## 9. Localization Testing
### Business Logic Requirements:
- Ensure the game is properly localized if multiple languages are supported.
### Validation Checkpoints:
| Test Case | Expected Behavior | Edge Cases |
|-----------|-------------------|------------|
| Language Switching | Game should switch to selected language without errors. | - Test with all available languages |
