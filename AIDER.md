# Aider Local Workflow Playbook

This project leverages local-first AI automation using an Architect/Editor split model configuration to build documentation and test suites securely.

## 🛠️ Local AI Stack Configuration
- **Architect Model (Reasoning):** `deepseek-r1:32b` (Handles system logic, edge case discovery, architecture plans)
- **Editor Model (Execution):** `qwen2.5-coder:32b` (Handles code generation, structural writing, refactoring)

## 🚀 Commands
- Run AI Engine: `npm run local-ai`
- Ask-Only Mode (No code writing): `npm run local-ai:check`

## 📋 Operational Workflow Rules
1. **Always use `/add` explicitly:** Before requesting documentation updates or testing changes, manually pass the file context using `/add <path>`. This limits context noise.
2. **Commit boundaries:** Aider auto-commits changes to Git upon successful generation. Ensure your staging area is clean before firing prompts.
3. **Self-Healing Loop:** If a test fails, execute `/test` inside the Aider terminal to launch the self-healing debug cycle.